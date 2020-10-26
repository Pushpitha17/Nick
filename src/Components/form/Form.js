import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { FormContainer, Heading } from "./FormElements"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import * as yup from "yup"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      display: "flex",
      width: "80%",
      margin: "24px auto",
    },
  },
  mobileroot: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      display: "flex",
      width: "90%",
      margin: "24px auto",
    },
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 16% 0 auto",
  },
}))

const initialValues = {
  name: "",
  email: "",
  msg: "",
}

let schema = yup.object().shape({
  msg: yup.string().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  date: yup.string().default(() => {
    return new Date(Date.now()).toDateString()
  }),
})

const initialErrostates = {
  name: false,
  email: false,
  msg: false,
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Form() {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:640px)")

  const [values, setValues] = useState(initialValues)
  const [errorStates, setErrorstates] = useState(initialErrostates)
  const [formsubmitted, setFormsubmitted] = useState(false)

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let data = schema.cast({ ...values })
    try {
      await schema.validate(data)
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      })
      console.log()
      setFormsubmitted(!formsubmitted)
    } catch (error) {
      setErrorstates({
        ...initialErrostates,
        [error.errors[0].split(" ")[0]]: true,
      })
      console.log(error)
    }
  }

  return (
    <FormContainer>
      {formsubmitted ? (
        <Heading style={{ textAlign: "center", lineHeight: "1.5" }}>
          Thank you for getting in touch with me.<br></br>I will get back to you
          soon.
        </Heading>
      ) : (
        <>
          <Heading>
            Please Fill out the form below for any type of inquiry.
          </Heading>
          <form
            className={matches ? classes.root : classes.mobileroot}
            autoComplete="on"
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              name="name"
              label="Name"
              variant="filled"
              placeholder="Name"
              helperText={errorStates.name ? "Name is required" : ""}
              error={errorStates.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Email"
              variant="filled"
              placeholder="Email"
              onChange={handleChange}
              helperText={errorStates.email ? "Valid email is required" : ""}
              error={errorStates.email}
            />
            <TextField
              name="msg"
              label="Message"
              placeholder="Message"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
              helperText={errorStates.msg ? "Message is required" : ""}
              error={errorStates.msg}
            />
            <Button
              size="medium"
              variant="contained"
              color="default"
              className={classes.button}
              type="submit"
            >
              SEND
            </Button>
          </form>
        </>
      )}
    </FormContainer>
  )
}

export default Form
