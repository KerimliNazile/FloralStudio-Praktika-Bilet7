import React from 'react'
import AddFormik from '../../Components/AddPageComponents/AddFormik'
import { Helmet } from 'react-helmet'

const AddPage = () => {
  return (
    <div>
         <Helmet>
        <meta name="description" content="Your page description" />
        <title>Add page </title>

      </Helmet>
      <AddFormik/>
    </div>
  )
}

export default AddPage
