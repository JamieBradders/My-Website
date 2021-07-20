import * as React from "react"
import Aside from "../components/Aside"
import Layout from "../components/Layout"
import TextLink from "../components/TextLink"

function HomePage() {
  return (
    <Layout>
      <main>
        <h1>This is my homepage.</h1>
        
        <p>
          <TextLink>This is a text link.</TextLink>
        </p>

        <Aside>
          <p>This is my aside.</p>
          <TextLink>This is the aside TextLink</TextLink>
        </Aside>
      </main>
    </Layout>
  )
}

export default HomePage