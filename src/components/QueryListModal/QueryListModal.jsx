import React, { useCallback, useMemo } from 'react'
import { Modal } from 'react-responsive-modal'

import './QueryListModal.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const QueryListModal = props => {

    const styles = useMemo(() => ({
        backgroundImage: `linear-gradient(180deg,rgba(29,29,36,.85),rgba(29,29,36,.85)),url(${process.env.PUBLIC_URL}/images/consultas.png)`,
        backgroundPosition: '0 0,50% 50%',
        backgroundSize: 'auto,cover',
        backgroundRepeat: 'repeat,no-repeat',
        backgroundAttachment: 'scroll,fixed'
    }), [])

    const renderItem = useCallback((item, i) => {
        return (
            <div key={`queryItem${i}`} className="col-md-6">
                <div  className="queryItem">
                    { item }
                </div>
            </div>
        )
    }, [])

    const closeIcon = (
        <FontAwesomeIcon icon={faTimes} size="2x" color="#fff"/>
    )

    
    return (
        <Modal
            classNames={{
                modal: 'QueryListModal'
            }}
            open={props.show}
            onClose={props.closeModal}
            styles={{ modal: styles }}
            closeIcon={closeIcon}
            container={props.container}
            center>
            <div className="modalHeader">
                <img className="icon" src={ props.iconURL } alt={ props.title } />
                <h3 className="modalTitle">{props.title}</h3>
                <p className="modalText">Este plano disponibiliza as seguintes consultas:</p>
            </div>
            <div className="container">
                <div className="row">
                    { props.items.map(renderItem) }
                </div>
            </div>
        </Modal>
    )
}

QueryListModal.defaultProps = {
    items: []
}

QueryListModal.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    show: PropTypes.bool,
    closeModal: PropTypes.func,
    title: PropTypes.string,
    iconURL: PropTypes.string,
    container: PropTypes.any
}

export default QueryListModal