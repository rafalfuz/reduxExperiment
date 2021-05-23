import styled from 'styled-components'
import PropTypes from 'prop-types'

const Paragraph = styled.p`
    color: #fff;
    font-size: 42px;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    background-color: ${({secondary})=> secondary ? 'yellow' : '#1DA1F2'};
    font-weight: 900;
    border-radius: 10px;
`

Paragraph.propTypes ={
    text: PropTypes.string,
    secondary: PropTypes.bool,
}

Paragraph.defaultProps ={
    secondary: false,
}

export default Paragraph

 
