import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faCode)
library.add(faChevronLeft)
library.add(faArrowLeft)

const faIcon = (props) => (
    <FontAwesomeIcon icon={props.type} />
)

export default faIcon;