import styled from "styled-components";

export const UserContainer = styled.div`
  margin: 20px;
  display: flex;
border-radius: 15px;
  background-color: white;
  flex-direction: column;
  border: 1px solid #43751a;
  height: 85vh;
`;
export const HeaderContainer = styled.div`
    display: flex;
    padding: 15px;
    width: 100%;
    background-color: #43751a;
    border-radius: 15px 15px 0px 0px;
    color:white;
    font-weight: 700;
    justify-content: center;
`
export const TableContainer = styled.div`
  overflow-x: auto;
  overflow-y: auto;
`;


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: left;
`;
export const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;
    &:last-child {
    border:none;
    }
`;

export const TableHeader = styled.th`
  padding: 12px;
  background-color: #f8f9fa;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
  text-align: center;
    word-break: break-word;
  
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: center;
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
    background-color: #28a745;
    color: white;

    &:hover {
        background-color: #218838;
    }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
    background-color: #dc3545;
    color: white;

    &:hover {
      background-color: #c82333;
    }
  
`;
export const FilterContainer = styled.div`
padding: 15px;
display: flex;
 gap:10px;
 flex-direction: row;
 width: 100%;
 flex-wrap: wrap;
`;
export const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

export const RoleFilter = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const OrgFilter = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const OlympiadFilter = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;