import React from 'react'

export function phoneValidations(value) {

    const regex = /^[7-9][0-9]{9}$/;
    return regex.test(value);          

}


export function passwordValidations(value) {

    return value.length > 6
}
