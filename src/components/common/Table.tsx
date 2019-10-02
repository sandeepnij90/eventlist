import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface Header {
    accessor: string
    value: string
}

type Props = {
    header: Header[]
    rows: {}[]
    rowClick: any
}

const Wrapper = styled.table`
    border:1px solid #f4f4f4;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    text-align: center;
`

const Row = styled.tr`
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    background: #f4f4f4;
    width: 100%;
    height: 35px;
    transition: 0.7s;
    &:hover {
        background: #ccc;
    }
`

const Table: FunctionComponent<Props> = ({ header = [], rows, rowClick }) => {

    const handleRowClick = (row: object) => () => {
        rowClick(row)
    }

    const renderHeader = () => {
        return header.map(( { value } : { value : string }) => {
            return (
                <th key={value}>{value}</th>
            )
        })
    }
    // limitation if object key is missing everything will be out of order
    const renderBodyCells = (row: any) => {
        const values = Object.values(row)
        return values.map((value, index) => {
            return (
                <td key={`${index}-${value}`} data-testid="cell">{value}</td>
            )
        })
    }

    const renderBody = () => {
        return rows.map((row, index) => {
            return (
                <Row key={index} onClick={handleRowClick(row)} data-testid="row">
                    {renderBodyCells(row)}
                </Row>
            )
        })
    }

    return (
        <Wrapper data-testid="table">
            <thead data-testid="header">
                <tr>
                    {renderHeader()}
                </tr>
            </thead>
            <tbody data-testid="body">
                {renderBody()}
            </tbody>
        </Wrapper>
    )   
}

export default Table