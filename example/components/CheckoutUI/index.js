import React from 'react'

import { OrderTypeControl } from '../../../src/components/OrderTypeControl'
import { OrderTypeControlUI } from '../OrderTypeControlUI'

import { MomentOption } from '../../../src/components/MomentOption'
import { MomentOptionUI } from '../MomentOptionUI'

import { AddressDetails } from '../../../src/components/AddressDetails'
import { AddressDetailsUI } from '../AddressDetailsUI'

import { UserDetails } from '../../../src/components/UserDetails'
import { UserDetailsUI } from '../UserDetailsUI'

import { PaymentOptions } from '../../../src/components/PaymentOptions'
import { PaymentOptionsUI } from '../PaymentOptionsUI'

import { DriverTips } from '../../../src/components/DriverTips'
import { DriverTipsUI } from '../DriverTipsUI'

import { CouponControl } from '../../../src/components/CouponControl'
import { CouponControlUI } from '../CouponControlUI'

export const CheckoutUI = (props) => {
  const {
    orderState,
    ordering,
    businessDetails,
    handlerValues,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}

      <OrderTypeControl
        UIComponent={OrderTypeControlUI}
        orderTypes={[1, 2, 3, 4, 5]}
      />
      <hr style={{ marginBottom: '20px' }} />

      <MomentOption
        ordering={ordering}
        UIComponent={MomentOptionUI}
        onChangeMoment={(value) => handlerValues({ field: 'moment', value })}
      />
      <hr />

      <AddressDetails
        ordering={ordering}
        UIComponent={AddressDetailsUI}
        businessId={41}
        // apiKey='AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
        apiKey=''
      />
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <UserDetails
            ordering={ordering}
            UIComponent={UserDetailsUI}
            businessId={41}
            useValidationFields
            useDefualtSessionManager
            useSessionUser
            handlerCouponValue={handlerValues}
          />
        </div>
        <div style={{ width: '50%' }}>
          <strong>Business Details</strong>
          {!businessDetails.loading && !businessDetails.error ? (
            <>
              {businessDetails.business && Object.keys(businessDetails.business).length > 0 ? (
                <div>
                  <p>{businessDetails.business.name}</p>
                  <p>{businessDetails.business.email}</p>
                  <p>{businessDetails.business.cellphone}</p>
                  <p>{businessDetails.business.address}</p>
                </div>
              ) : (
                <p>❌ Not Found ❌</p>
              )}
            </>
          ) : (
            <>
              {businessDetails.error && businessDetails.error.length > 0 ? (
                businessDetails.error.map((e, i) => (
                  <p key={i}>ERROR: [{e}]</p>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </div>
      </div>
      <hr />

      <PaymentOptions
        ordering={ordering}
        UIComponent={PaymentOptionsUI}
        businessId={41}
        onChangePayment={handlerValues}
      />
      <hr />

      {orderState.options.type === 1 &&
        <>
          <DriverTips
            UIComponent={DriverTipsUI}
            businessId={41}
            driverTipsOptions={[0, 10, 15, 20, 25]}
            handlerChangeDriverOption={(value) => handlerValues({ field: 'driver_tips', value: value / 100 })}
          />
          <hr />
        </>}

      <CouponControl
        ordering={props.ordering}
        UIComponent={CouponControlUI}
        businessId={41}
        isDisabled
        onChangeCouponValue={handlerValues}
      />
      <br />
      <br />

      <button>
        Place Order
      </button>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}
    </>
  )
}
