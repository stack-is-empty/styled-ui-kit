import React from 'react';
import _includes from 'lodash/includes';
import { FormError, FormGroup, FormLabel } from '../../';

type Props = {
    label: string,
    type: string,
    touched: boolean,
    hideErrMsg: boolean,
    inlineForm: boolean,
    error: string,
    className: string,
    children: any,
    htmlFor: string,
    showHint: boolean,
    hintMessage: string,
}

const FormField = ({
    label,
    noLabel,
    type,
    touched,
    error,
    htmlFor,
    onCheck,
    children,
    groupClassName,
    containerClassName,
    labelClassName,
    inlineForm,
    className,
    hideErrMsg,
    showHint,
    hintMessage }: Props) => {
    const hasError = !!(touched && error);
    const hasSuccess = !!(touched && !error);

    const showError = () => {
        if (hasError && !hideErrMsg) {
            return <FormError>{error}</FormError>;
        }

        return null;
    };

    if (label || noLabel) {
        if (_includes(['checkbox', 'radio'], type)) {
            if (label) {
                return (
                    <FormGroup
                        error={hasError}
                        groupClassName={groupClassName}
                        success={hasSuccess}
                        hideErrLabelColor={hideErrMsg}>
                            <FormLabel
                                showHint={showHint}
                                onCheck={onCheck}
                                className={labelClassName}
                                containerClassName={containerClassName}
                                hintMessage={hintMessage}
                                htmlFor={htmlFor || label}>
                                    <span>{label}</span>
                                    {children}
                            </FormLabel>
                                {showError()}
                    </FormGroup>
                );
            } else if (noLabel) { 
                return (
                    <FormGroup
                        groupClassName={groupClassName}
                        error={hasError}
                        success={hasSuccess}
                        hideErrLabelColor={hideErrMsg}>
                            {children}
                    </FormGroup>
                );
            }
        }

        if (inlineForm) {
            return (
                <FormGroup
                    error={hasError}
                    groupClassName={groupClassName}
                    success={hasSuccess}>
                    <div className="flex">
                        <div className='flex-grow-3'>
                            <FormLabel
                                showHint={showHint}
                                className={labelClassName}
                                hintMessage={hintMessage}>
                                {label}
                            </FormLabel>
                        </div>
                        <div className='flex flex-grow-6 justify-content-end'>
                            {children}
                            {showError()}
                        </div>
                    </div>
                </FormGroup>
            );
        }
        return (
            <FormGroup
                error={hasError}
                groupClassName={groupClassName}
                success={hasSuccess}>
                <FormLabel
                    showHint={showHint}
                    className={labelClassName}
                    hintMessage={hintMessage}>
                    {label}
                </FormLabel>
                {children}
                {showError()}
            </FormGroup>
        );
    }
    return (
        <FormGroup
            error={hasError}
            groupClassName={groupClassName}
            success={hasSuccess}>
            {children}
            {showError()}
        </FormGroup>
    );
};

export default FormField;
