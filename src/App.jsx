
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookFrom/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefullForm from './components/StatefullForm/StatefullForm'

function App() {
  
  // const handleSingUpSubmit = data => {
  //  console.log('sign up data', data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log('update profile', data)
  // }

  return (
    <>

      <h1>Form Master</h1>
      
      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefullForm></StatefullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReusableForm fromTitle={'Sign Up'} handleSubmit={handleSingUpSubmit} >
        <div>
          <h2>Sign UP</h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm> */}

      {/* <ReusableForm fromTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always kepp your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
