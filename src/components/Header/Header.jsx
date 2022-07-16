//general
import React from "react"
//styles
import * as styles from "./styles.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Header = () => {
  const query = useStaticQuery(graphql`
    query GetLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 512
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const logoImage = getImage(query.file)

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link className={styles.logoContainer} to={"/"}>
          <GatsbyImage
            image={logoImage}
            alt="This is logo"
            className={styles.logoImage}
          />

          <h1>Awesome posts</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
