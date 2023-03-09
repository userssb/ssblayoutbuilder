import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNav: true,
    showRightNav: true,
  }

  onToggleShowLeftNavBar = () => {
    this.setState(prevState => ({showLeftNav: !prevState.showLeftNav}))
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  onToggleShowRightNavBar = () => {
    this.setState(prevState => ({showRightNav: !prevState.showRightNav}))
  }

  render() {
    const {showContent, showLeftNav, showRightNav} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNav,
          showRightNav,
          onToggleShowLeftNavBar: this.onToggleShowLeftNavBar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavBar: this.onToggleShowRightNavBar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
