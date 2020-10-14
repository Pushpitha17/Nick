import React from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import { FormContainer, Heading } from "./FormElements"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"

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

function Form() {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:640px)")
  return (
    <FormContainer>
      <Heading>Please Fill out the form below for any type of inquiry.</Heading>
      <form
        className={matches ? classes.root : classes.mobileroot}
        noValidate
        autoComplete="off"
      >
        <TextField id="name" label="Name" variant="filled" placeholder="Name" />
        <TextField
          id="email"
          label="Email"
          variant="filled"
          placeholder="Email"
        />
        <TextField
          id="msg"
          label="Message"
          placeholder="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button
          size="medium"
          variant="contained"
          color="grey"
          className={classes.button}
        >
          SEND
        </Button>
      </form>
    </FormContainer>
  )
}

export default Form
