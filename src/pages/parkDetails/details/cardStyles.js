const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign:'left',
  },
  card: {
    minWidth: 275,
    marginBottom: 20,
    padding: 18,
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  },
  details: {
    flexDirection: "column",
    textAlign:'left',
  },
  button: {
    margin: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
});

export default styles;