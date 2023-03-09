import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNav,
        showRightNav,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="layout-cont">
          <div className="controller-cont">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-cont">
              <input
                type="checkbox"
                id="checkCont"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="checkCont" className="check-label">
                Content
              </label>
            </div>
            <div className="checkbox-cont">
              <input
                type="checkbox"
                id="checkLeft"
                checked={showLeftNav}
                onChange={onChangeLeftNav}
              />
              <label htmlFor="checkLeft" className="check-label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-cont">
              <input
                type="checkbox"
                id="checkRight"
                checked={showRightNav}
                onChange={onChangeRightNav}
              />
              <label htmlFor="checkRight" className="check-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
