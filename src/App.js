import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {
    employeeName: '',
    income: 0,
    netSalary: 0,
    tax: 0,
  }

  onChangeEmployeeName = event => {
    this.setState({employeeName: event.target.value})
  }

  onChangeSalary = event => {
    this.setState({income: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {income, tax, netSalary} = this.state
    let oneOff = tax
    let im = netSalary
    if (income < 250000) {
      oneOff = 0
      im = 0
    } else if (income > 250000 && income <= 500000) {
      oneOff = income * 0.05
      im = income - oneOff
    } else if (income > 500000 && income <= 700000) {
      oneOff = income * 0.1
      im = income - oneOff
    } else if (income > 700000 && income <= 1000000) {
      oneOff = income * 0.15
      im = income - oneOff
    } else if (income > 1000000 && income <= 1250000) {
      oneOff = income * 0.2
      im = income - oneOff
    } else if (income > 1250000 && income <= 1500000) {
      oneOff = income * 0.25
      im = income - oneOff
    } else if (income > 1500000) {
      oneOff = income * 0.3
      im = income - oneOff
    }
    return this.setState({tax: oneOff, netSalary: im})
  }

  render() {
    const {employeeName, income, netSalary, tax} = this.state
    return (
      <div className="dis">
        <h1 className="heading">INCOME TAX CALCULATOR</h1>
        <p className="ppp">
          Revised Income tax slabs under new tax regime for FY 2023-24 (AY
          2024-25 <br />
          The income tax slabs under the new income tax regime will be as
          follows:
        </p>

        <div className="can_2">
          <div className="can">
            <h1 className="can_1">Income tax slabs under new tax regime</h1>
          </div>
          <div className="can">
            <h1 className="can_1">Income tax rates under new tax regime</h1>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">O - Rs 2.5 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">0</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Rs 2.5 lakh - Rs 5 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">5%</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Rs 5 lakh - Rs 7 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">10%</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Rs 7 lakh - Rs 10 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">15%</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Rs 10 lakh - Rs 12.5 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">20%</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Rs 12.5 lakh - Rs 15 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">25%</p>
          </div>
        </div>

        <div className="can_2">
          <div className="can_para">
            <p className="para">Income Above Rs 15 lakh</p>
          </div>
          <div className="can_para">
            <p className="para">30%</p>
          </div>
        </div>
        <p className="line">Try to give Employee-Name and Income .</p>
        <form onSubmit={this.onSubmitForm}>
          <div className="employee">
            <label className="labelOne" htmlFor="employeeName">
              Employee Name :
            </label>
            <input
              onChange={this.onChangeEmployeeName}
              value={employeeName}
              id="employeeName"
              type="text"
              className="inputLabel"
            />
          </div>
          <div className="employee">
            <label className="labelOne" htmlFor="salary">
              Income :
            </label>
            <input
              className="inputLabel"
              onChange={this.onChangeSalary}
              value={income}
              id="salary"
              type="number"
            />
          </div>
          <div className="employee">
            <label className="labelOne" htmlFor="tax">
              Tax :
            </label>
            <input className="inputLabel" value={tax} id="tax" type="text" />
          </div>

          <div className="employee">
            <label className="labelOne" htmlFor="netSalary">
              Net Salary :
            </label>
            <input
              className="inputLabel"
              value={netSalary}
              id="netSalary"
              type="text"
            />
          </div>
          <div className="button-div">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
