import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const Messages = (props) => {
  const {
    UIComponent,
    orderId,
    customHandleSend
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const accessToken = props.accessToken || token

  const [canRead, setCanRead] = useState({ business: true, administrator: true, driver: true })
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState({ loading: false, error: null, messages: [] })
  const [sendMessage, setSendMessages] = useState({ loading: false, error: null })
  const [image, setImage] = useState(null)
  /**
   * Method to send message
   */
  const handleSend = async () => {
    if (customHandleSend) {
      return customHandleSend(message)
    }
    console.log(`send Message: ${message}`, canRead)
    try {
      setSendMessages({ loading: true, error: null })
      const _canRead = [3]
      if (canRead.administrator) {
        _canRead.push(0)
      }
      if (canRead.business) {
        _canRead.push(2)
      }
      if (canRead.driver) {
        _canRead.push(4)
      }
      const body = {
        comment: message,
        type: 2,
        can_see: _canRead.join(',')
      }
      if (image) {
        body.type = 3
        body.file = image
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}/messages`, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }, body: JSON.stringify(body) })
      const { error, result } = await response.json()
      setSendMessages({ loading: false, error: null })
      if (!error) {
        console.log('success:', result)
        setMessages({
          ...messages,
          messages: [
            ...messages.messages,
            result
          ]
        })
      } else {
        console.log('error', result)
        setSendMessages({ loading: false, error: result })
      }
    } catch (error) {
      setSendMessages({ loading: false, error: [error.Messages] })
      console.log('error', error)
    }
  }
  /**
   * Method to Load message for first time
   */
  const loadMessages = async () => {
    try {
      setMessages({ ...messages, loading: true })
      const response = await fetch(`${ordering.root}/orders/${orderId}/messages`, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          messages: result,
          loading: false,
          error: null
        })
      } else {
        setMessages({
          ...messages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setMessages({ ...messages, loading: false, error: [error.Messages] })
    }
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          messages={messages}
          image={image}
          canRead={canRead}
          handleSend={handleSend}
          setMessage={setMessage}
          setCanRead={setCanRead}
          sendMessage={sendMessage}
          setImage={setImage}
        />
      )}
    </>
  )
}

Messages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: PropTypes.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Messages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}