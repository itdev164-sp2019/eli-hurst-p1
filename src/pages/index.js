import React from "react"
import Layout from "../components/layout"
import SEO from "../gatsby-components/seo"
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducer from '../store/reducer'
import Joined from '../components/Joined/Joined'

const store = createStore(reducer);



const IndexPage = () => (
  <Provider store= {store}>
  <Layout>
    <SEO title="Beer suggestor" keywords={[`Beer`, `drinking`, `react` , 'gatsby']} />
    <h1>LETS GET READY TO DRINK SHIT!!!</h1>
    <p>Pick a beer so you can get krunked for days!!</p>
    <Joined/>
    <br/>
    <br/>
  </Layout>
  </Provider>
  
)

export default IndexPage
