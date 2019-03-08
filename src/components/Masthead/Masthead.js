import React from 'react'
import PropTypes from 'prop-types'
import {Box} from 'rebass'
import styled from 'styled-components'
import { Link } from 'rebass'

const Outer = styled(Box)`
height: ${props => props.height};
width: 100%;
background-color: #32cd32;
margin-bottom: 1.5rem;
padding-top: 5.5rem;
padding-left: 1.5rem;
text-align: center;
height:200px
`

const StyledLink = styled(Link)`
color: black;
text-decoration: underline overline wavy blue;
padding: 100px;
font-size: 70px;
`

export const Masthead = ({ height, siteTitle}) => {
    return (
        <Outer height={height}>
            <StyledLink href="/">{siteTitle}</StyledLink>
        </Outer>
    )
}

Masthead.protoTypes = {
    height: PropTypes.string.isRequired,
    siteTitle: PropTypes.string
}