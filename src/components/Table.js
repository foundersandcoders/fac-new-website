import React from "react"
import styled from "styled-components"

const _Table = styled.table.attrs({
  className: "fw3 font-4 mb6",
})``

const _HeaderCell = styled.th`
  width: 156px;
`

const TopBorder = styled.div.attrs({
  className: ({ colour }) => `bt bw3 tl b--${colour} pt1 w-80 b`,
})``

const _Cell = styled.td.attrs({
  className: "pv5 mh2",
})``

const _Row = styled.tr.attrs({
  className: "bb b--black-20 bw1",
})``

const Table = () => (
  <_Table>
    <thead>
      <tr>
        <_HeaderCell>
          <TopBorder colour="gray">Cohort</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="yellow">Expression of interest</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="red">Application window</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="green">Interview dates</TopBorder>
        </_HeaderCell>
        <_HeaderCell>
          <TopBorder colour="blue">Course dates</TopBorder>
        </_HeaderCell>
      </tr>
    </thead>
    <tbody>
      <_Row>
        <_Cell>Spring 2019</_Cell>
        <_Cell>Until 30th November</_Cell>
        <_Cell>1st December - 31st December</_Cell>
        <_Cell>7th January - 12th January</_Cell>
        <_Cell>4th March, 2019 - June 21st, 2019</_Cell>
      </_Row>
      <_Row>
        <_Cell>Summer 2019</_Cell>
        <_Cell>January - March</_Cell>
        <_Cell>1st April - 30th April</_Cell>
        <_Cell>7th May - 11th May</_Cell>
        <_Cell>1st July 2019 - 18th October, 2019</_Cell>
      </_Row>
      <_Row>
        <_Cell>Winter 2019</_Cell>
        <_Cell>May - July</_Cell>
        <_Cell>1st August - 31st August</_Cell>
        <_Cell>2nd September - 7th September</_Cell>
        <_Cell>28th October 2019 - 21st February 2020</_Cell>
      </_Row>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="5" className="pt4">
          * Applications close at midnight GMT on the final day of the window.
        </td>
      </tr>
    </tfoot>
  </_Table>
)

export default Table
