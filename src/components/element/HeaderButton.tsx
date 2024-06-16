import React, { useState } from 'react'

function HeaderButton({ open, onClick }: { open: boolean, onClick: () => void}){

  return (
    <button className={'p-element-header-button__headerButton sp'} onClick={onClick} aria-expanded={open}>
        <span className={'p-element-header-button__line1 line1'}></span>
        <span className={'p-element-header-button__line2 line2'}></span>
    </button>
  )
}

export default HeaderButton
