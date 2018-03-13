import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getProps, defaultProps } from '../utils/proptypes'
import { getUidStr } from '../utils/uid'
import { checkinputClass } from '../styles'

class Checkbox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checked: props.checked,
    }

    this.id = `cb_${getUidStr()}`
    this.handleChange = this.handleChange.bind(this)
  }

  getChecked() {
    const { checked, value, htmlValue } = this.props
    if (checked !== undefined) return checked
    if (this.state.checked === undefined) return value === htmlValue
    return this.state.checked
  }

  getProp(key) {
    if (this.props[key] !== undefined) return this.props[key]
    return this.state[key]
  }

  handleChange(e) {
    const { htmlValue, onChange, index } = this.props
    const { checked } = e.target
    this.setState({ checked })
    const value = checked ? htmlValue : undefined
    if (onChange) onChange(value, checked, index)
  }

  render() {
    const { disabled, style, children } = this.props

    const checked = this.getChecked()

    const className = classnames(
      checkinputClass(
        '_',
        disabled && 'disabled',
        checked === true && 'checked',
        checked === 'indeterminate' && 'indeterminate',
      ),
      this.props.className,
    )

    return (
      <label className={className} style={style} htmlFor={this.id}>
        <input
          id={this.id}
          disabled={disabled}
          type="checkbox"
          onChange={this.handleChange}
          checked={checked}
        />
        <i className={checkinputClass('indicator', 'checkbox')} />
        {children && <span>{children}</span>}
      </label>
    )
  }
}

Checkbox.propTypes = {
  ...getProps('disabled'),
  checked: PropTypes.oneOf([true, false, 'indeterminate']),
  htmlValue: PropTypes.any,
  index: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

Checkbox.defaultProps = {
  ...defaultProps,
  htmlValue: true,
}

export default Checkbox
