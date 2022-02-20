export default ({redirect, $auth}) => {
  if ($auth.loggedIn) {
    return redirect('/')
  }
}
