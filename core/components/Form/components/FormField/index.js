import React from 'react';
import _includes from 'lodash/includes';
import { FormError, FormGroup, FormLabel } from '../../';

var FormField = function FormField(_ref) {
    var label = _ref.label,
        noLabel = _ref.noLabel,
        type = _ref.type,
        touched = _ref.touched,
        error = _ref.error,
        htmlFor = _ref.htmlFor,
        onCheck = _ref.onCheck,
        children = _ref.children,
        groupClassName = _ref.groupClassName,
        containerClassName = _ref.containerClassName,
        labelClassName = _ref.labelClassName,
        inlineForm = _ref.inlineForm,
        className = _ref.className,
        hideErrMsg = _ref.hideErrMsg,
        showHint = _ref.showHint,
        hintMessage = _ref.hintMessage;

    var hasError = !!(touched && error);
    var hasSuccess = !!(touched && !error);

    var showError = function showError() {
        if (hasError && !hideErrMsg) {
            return React.createElement(
                FormError,
                null,
                error
            );
        }

        return null;
    };

    if (label || noLabel) {
        if (_includes(['checkbox', 'radio'], type)) {
            if (label) {
                return React.createElement(
                    FormGroup,
                    {
                        error: hasError,
                        groupClassName: groupClassName,
                        success: hasSuccess,
                        hideErrLabelColor: hideErrMsg },
                    React.createElement(
                        FormLabel,
                        {
                            showHint: showHint,
                            onCheck: onCheck,
                            className: labelClassName,
                            containerClassName: containerClassName,
                            hintMessage: hintMessage,
                            htmlFor: htmlFor || label },
                        React.createElement(
                            'span',
                            null,
                            label
                        ),
                        children
                    ),
                    showError()
                );
            } else if (noLabel) {
                return React.createElement(
                    FormGroup,
                    {
                        groupClassName: groupClassName,
                        error: hasError,
                        success: hasSuccess,
                        hideErrLabelColor: hideErrMsg },
                    children
                );
            }
        }

        if (inlineForm) {
            return React.createElement(
                FormGroup,
                {
                    error: hasError,
                    groupClassName: groupClassName,
                    success: hasSuccess },
                React.createElement(
                    'div',
                    { className: 'flex' },
                    React.createElement(
                        'div',
                        { className: 'flex-grow-3' },
                        React.createElement(
                            FormLabel,
                            {
                                showHint: showHint,
                                className: labelClassName,
                                hintMessage: hintMessage },
                            label
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'flex flex-grow-6 justify-content-end' },
                        children,
                        showError()
                    )
                )
            );
        }
        return React.createElement(
            FormGroup,
            {
                error: hasError,
                groupClassName: groupClassName,
                success: hasSuccess },
            React.createElement(
                FormLabel,
                {
                    showHint: showHint,
                    className: labelClassName,
                    hintMessage: hintMessage },
                label
            ),
            children,
            showError()
        );
    }
    return React.createElement(
        FormGroup,
        {
            error: hasError,
            groupClassName: groupClassName,
            success: hasSuccess },
        children,
        showError()
    );
};

export default FormField;