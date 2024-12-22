import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { actionCreators } from '../store';
import {
  ComponentWapper,
  Componentindex,
  Componentbutton,
  Componenttitle,
  ComponentoptionWapper,
  Innerpageoption,
  DatePickerWrapper,
  customStyles
} from '../../../components/style';
import { table } from '../../../components/function/table';
import { getboundary } from '../../admin/store/actionCreators';

class Source extends PureComponent {
  state = {
    hoveredBox: null,
    selectedPN: null,
    selecetedbid: null,
    pages: [
      { id: 1, text: 'Retrieve' }
    ],
    startDate: new Date(),
    endDate: new Date(),
    customTimeInput: "",
    display: false
  };

  handleMouseEnter = (id) => {
    this.setState({ hoveredBox: id });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredBox: null });
  };

  handleTimeInputChange = (field, event) => {
    this.setState({ [field]: event.target.value });
  };

  handleDateChange = (field, date) => {
    this.setState({ [field]: date });
  };

  handleSelectChange = (field, selectedOptions) => {
    this.setState({ [field]: selectedOptions });
  };

  whichpage(page, retrieve_source) {
    const { startDate, endDate, customTimeInput, selectedPN, selecetedbid } = this.state;
    const { boundarylist, pn_list } = this.props;
    const CustomTimeInput = ({ value, onChange }) => (
      <input
        value={value}
        onChange={onChange}
        placeholder="HH:mm"
        className="custom-time-input"
      />
    );

    const boundaryOptions = boundarylist.map(item => ({
      value: item.bid,
      label: item.name
    }));

    const pnOptions = pn_list.map(item => ({
      value: item.pn,
      label: item.name
    }));

    switch (page) {
      case 1:
        {
          return (
            <ComponentWapper>
              <ComponentoptionWapper >
                <Componentindex>BID</Componentindex>
                <Select
                  placeholder="Select bid"
                  options={boundaryOptions}
                  value={selecetedbid}
                  onChange={(e) => (this.handleSelectChange('selecetedbid', e))}
                  styles={customStyles}
                />
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>PN ID</Componentindex>
                <Select
                  placeholder="Select pn"
                  options={pnOptions}
                  value={selectedPN}
                  onChange={(e) => (this.handleSelectChange('selectedPN', e))}
                  styles={customStyles}
                />
              </ComponentoptionWapper>
              <ComponentoptionWapper >
                <Componentindex>Start Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => this.handleDateChange('startDate', date)}
                    dateFormat="yyyy/MM/dd"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper >
              <ComponentoptionWapper>
                <Componentindex>End Date</Componentindex>
                <DatePickerWrapper>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => this.handleDateChange('endDate', date)}
                    dateFormat="yyyy/MM/dd"
                    timeCaption="time"
                    customTimeInput={<CustomTimeInput value={customTimeInput} onChange={(e) => this.handleTimeInputChange('customTimeInput', e)} />}
                  />
                </DatePickerWrapper>
              </ComponentoptionWapper>
              <ComponentoptionWapper>
                <Componentbutton onClick={() => { this.props.sourceretrieve(selecetedbid, selectedPN, startDate, endDate); this.setState({ display: true }); }}>Retrieve</Componentbutton>
              </ComponentoptionWapper>
              {this.state.display ?
                <div>{table(retrieve_source, this.props.setsourcepage, null, null, 0)}</div>
                :
                ''}
            </ComponentWapper>
          );
        }
      default:
        return;
    }
  }

  render() {
    const { setsourcepage, sourcepage, retrieve_source } = this.props;
    const { hoveredBox, pages } = this.state;
    return (
      <ComponentWapper>
        <Componenttitle>Source</Componenttitle>
        <ComponentoptionWapper>
          {pages.map(({ id, text }) => (
            (localStorage.getItem('authority') === 'admin' || text === 'Retrieve') && (
              <Innerpageoption
                key={id}
                onClick={() => setsourcepage(id)}
                onMouseEnter={() => this.handleMouseEnter(id)}
                onMouseLeave={this.handleMouseLeave}
                className={sourcepage === id || hoveredBox === id ? 'mousein' : ''}
              >
                {text}
              </Innerpageoption>
            )
          ))}
        </ComponentoptionWapper>
        {this.whichpage(sourcepage, retrieve_source)}
      </ComponentWapper>
    )
  }

  componentDidMount() {
    this.props.getpn();
    this.props.getboundary();
  }
}

const mapStateToProps = (state) => ({
  sourcepage: state.esg.sourcepage,
  retrieve_source: state.esg.retrieve_source,
  pn_list: state.esg.pn_list,
  boundarylist: state.admin.boundarylist
});

const mapDisptchToProps = (dispatch) => {
  return {
    setsourcepage(id) {
      dispatch(actionCreators.setsourcepage(id));
    },
    getpn() {
      dispatch(actionCreators.getpn());
    },
    getboundary() {
      dispatch(getboundary());
    },
    sourceretrieve(selecetedbid, selectedPN, startdate, enddate) {
      const startDate = startdate.toISOString().split('T')[0];
      const endDate = enddate.toISOString().split('T')[0];
      dispatch(actionCreators.sourceretrieve(selecetedbid.value, selectedPN.value, startDate, endDate));
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Source);