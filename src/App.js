import React from 'react';
import {
  Formik,
  Form,
  useFormik,
  Field,

} from 'formik'

function App() {

  // const formik = useFormik({
  //   ,
  //   onSubmit: values => { console.log(values) }
  // })


  return (
    <Formik initialValues = {{
      name: '',
      email: '',
      channel: ''
    }}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
    }}
    >
    <div style={{ textAlign: 'center' }}>
<Form>
      <label htmlFor='name'>Name</label>
      <Field type='text' id='name' name='name'/>

      <label htmlFor='email'>Email</label>
      <Field type='email' id='email' name='email'/>

      <label htmlFor='channel'>Channel</label>
      <Field
        type='text'
        id='channel'
        name='channel'
        placeholder='YouTube channel name'
      />
      <button type="submit">Submit</button>
</Form>
</div>
</Formik>

  );
}

export default App;
