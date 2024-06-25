import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentinput,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Sendresult
} from '../style';

class Approve extends PureComponent {
  render() {
    const { Asend, Asendvalue } = this.props;
    return (
      <ComponentWapper>
        <Componenttitle>Approve</Componenttitle>
        <ComponentoptionWapper>
          <Componentindex>Project ID</Componentindex>
          <Componentinput ref={(input) => { this.project_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>PM ID</Componentindex>
          <Componentinput ref={(input) => { this.pm_id = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Material</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.material = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentindex>Equipment</Componentindex>
          <Componentinput className='bigbox' ref={(input) => { this.equipment = input }} />
        </ComponentoptionWapper>
        <ComponentoptionWapper>
          <Componentbutton onClick={() => this.props.Asendinfo(this.project_id, this.pm_id, this.material, this.equipment)}>Accept</Componentbutton>
          <Componentbutton onClick={() => this.props.Asendinfo(this.project_id, this.pm_id, this.material, this.equipment)} className='reject' >Reject</Componentbutton>
          {Asend ? (Asendvalue ? <Sendresult>success</Sendresult> : <Sendresult className='fail'>fail</Sendresult>) : null}
        </ComponentoptionWapper>
      </ComponentWapper>
    )
  }
}

const mapStateToProps = (state) => ({
  Asend: state.admin.Asend,
  Asendvalue: state.admin.Asendvalue
})

const mapDisptchToProps = (dispatch) => {
  return {
    Asendinfo(project_id, pm_id, material, equipment) {
      dispatch(actionCreators.Asendinfo(project_id.value, pm_id.value, material.value, equipment.value));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Approve);