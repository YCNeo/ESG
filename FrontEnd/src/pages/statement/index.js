import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { actionCreators } from './store';
import DatePicker from 'react-datepicker';
import { Navigate } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';
import {
  PageWrapper,
  PagePage,
  Componenttitle,
  ComponentoptionWapper,
  Componentindex,
  Componentcheckbox,
  Componentbutton,
  customStyles,
  DatePickerWrapper
} from '../../components/style';
import { barchart, linechart, piechart } from '../../components/function/chart';
import { table } from '../../components/function/table';

class Statement extends PureComponent {
  state = {
    selectedProject: null,
    allProjectSelected: false,
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
    display: false
  };

  handleSelectChange = (selectedOptions) => {
    this.setState({ selectedProject: selectedOptions });
  };

  handleSelectAll = () => {
    const { projectlist } = this.props;
    const projectOptions = projectlist.map(item => ({
      value: item.PID,
      label: item.pname
    }));
    this.setState({
      selectedProject: projectOptions,
      allProjectSelected: true
    });
  };

  handleDateChange = (field, date) => {
    this.setState({ [field]: date });
  };

  handleTimeInputChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  renderChart = (projectdata) => {
    return (
      <Componentcheckbox>
        {barchart(projectdata)}
        {linechart(projectdata)}
        {piechart(projectdata)}
      </Componentcheckbox>
    )
  }

  mergeArrays(data) {
    const apple = Object.values(data).flat();
    return apple;
  }

  render() {
    const { projectlist, projectdata } = this.props;
    const { selectedProject, startDate, endDate, customTimeInput } = this.state;
    const receiveprojectdata = this.mergeArrays(projectdata);

    const projectOptions = projectlist.map(item => ({
      value: item.PID,
      label: item.pname
    }));

    const CustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={onChange}
        placeholder="HH:mm"
        className="custom-time-input"
      />
    );

    if (localStorage.getItem('jwtToken') != null) {
      return (
        <PageWrapper>
          <PagePage>
            <Componenttitle>Retrieve</Componenttitle>
            <Componenttitle className='componentindex'>查詢條件：</Componenttitle>
            <ComponentoptionWapper>
              <Componentindex>Project name</Componentindex>
              <Select
                placeholder="Select project"
                closeMenuOnSelect={false}
                options={projectOptions}
                isMulti
                value={selectedProject}
                onChange={this.handleSelectChange}
                styles={customStyles}
              />
              <Componentbutton className='selectall' onClick={this.handleSelectAll}>Select All</Componentbutton>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentindex>Start From</Componentindex>
              <DatePickerWrapper>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => this.handleDateChange('startDate', date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  dateFormat="yyyy/MM/dd HH:mm"
                  timeCaption="time"
                  customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                />
              </DatePickerWrapper>
              <Componentindex>End At</Componentindex>
              <DatePickerWrapper>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => this.handleDateChange('endDate', date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  dateFormat="yyyy/MM/dd HH:mm"
                  timeCaption="time"
                  customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                />
              </DatePickerWrapper>
            </ComponentoptionWapper>
            <ComponentoptionWapper>
              <Componentbutton onClick={() => { this.props.sendinfo(selectedProject); this.setState({ display: true }) }}>Create</Componentbutton>
            </ComponentoptionWapper>
            {this.state.display ?
              <ComponentoptionWapper className='statement'>
                {table(receiveprojectdata, null, null, null, 0)}
                <Componentcheckbox>
                  {this.renderChart(receiveprojectdata)}
                </Componentcheckbox>
              </ComponentoptionWapper>
              :
              ''}
          </PagePage>
        </PageWrapper>
      )
    } else {
      return <Navigate to='/login' />
    }
  }

  componentDidMount() {
    this.props.getproject();
  }
}

const mapStateToProps = (state) => ({
  projectlist: state.statement.projectlist,
  projectdata: state.statement.projectdata
})

const mapDispatchToProps = (dispatch) => {
  return {
    getproject() {
      dispatch(actionCreators.getproject())
    },
    sendinfo(selectedProject) {
      const projectChecked = selectedProject
      ? selectedProject.map(option => option.value)
      : [];
      dispatch(actionCreators.sendinfo(projectChecked));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statement);