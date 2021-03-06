import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { ToastType, useToast } from '../../contexts/ToastContext'
import { useLanguage } from '../../contexts/LanguageContext'

export const OrderReview = (props) => {
  const { UIComponent, order, onSaveReview, handleCustomSendReview, isToast, defaultStar } = props

  const [ordering] = useApi()
  const [session] = useSession()
  const [, t] = useLanguage()
  const [, { showToast }] = useToast()
  const [stars, setStars] = useState({ quality: defaultStar, punctiality: defaultStar, service: defaultStar, packaging: defaultStar, comments: '' })
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  /**
   * Function that load and send the review order to ordering
   */
  const handleSendReview = async () => {
    if (handleCustomSendReview) {
      handleCustomSendReview && handleCustomSendReview(stars)
    }
    setFormState({ ...formState, loading: true })
    try {
      const body = {
        order_id: order.id,
        quality: stars.quality,
        delivery: stars.punctiality,
        service: stars.service,
        package: stars.packaging,
        comment: stars.comments,
        user_id: session?.user?.id,
        business_id: order.business_id
      }
      const response = await fetch(`${ordering.root}/business/${order.business_id}/reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const { result, error } = await response.json()
      onSaveReview && onSaveReview(response)
      setFormState({ loading: false, result: result, error: error })
      if (!error && isToast) showToast(ToastType.Success, t('ORDER_REVIEW_SUCCESS_CONTENT', 'Thank you, Order review successfully submitted!'))
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }
  /**
   * Rating the product
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeRating = (e) => {
    setStars({
      ...stars,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  /**
   * Rating the product with comments
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    setStars({
      ...stars,
      comments: e.target.value
    })
  }
  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          stars={stars}
          order={order}
          formState={formState}
          handleSendReview={handleSendReview}
          handleChangeInput={handleChangeInput}
          handleChangeRating={handleChangeRating}
          setStars={setStars}
        />
      )}
    </>
  )
}

OrderReview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Getting the order that can be review
  */
  order: PropTypes.object,
  /**
   * Enable to show/hide toast
   */
  isToast: PropTypes.bool,
  /**
   * Setting as default value for stars
   */
  defaultStar: PropTypes.number,
  /**
    * Response of ordering that contains de review
   */
  onSaveReview: PropTypes.func,
  /**
   * function that saves the order that will be reviewed
   */
  handleSendReview: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return scores without default behavior
   */
  handleCustomSendReview: PropTypes.func
}

OrderReview.defaultProps = {
  defaultStar: 1,
  order: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
