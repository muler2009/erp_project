import React, {useState} from 'react'
import { GroupAPIResponse, GroupInterface } from '../../models/group.model'
import { useGetGroupsQuery } from '../../features/groupsAPI'
import useUserContext from '../../submodules/managment/user/context/useUserContext'

type TData = {
    data: string
}

interface RowInterface {
  id: number
}

const CustomTable = () => {
    const {data} = useGetGroupsQuery()
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const {newUserAccount, setUserNewAccount, handleUserCreateInputChanges} = useUserContext()

    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
      if (event.target.checked) {
        setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
        setUserNewAccount?.((prevUserAccount) => ({
          ...prevUserAccount,
          group: getCustomGroupName(id),
        }));
      } else {
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.filter((rowId) => rowId !== id)
        );
        setUserNewAccount?.((prevUserAccount) => ({
          ...prevUserAccount,
          group: '',
        }));
      }
    };
  
    const getCustomGroupName = (id: number): string => {
      const selectedRow = data?.find((d, index) => index === id - 1);
      return selectedRow?.custom_group_name || '';
    };

    const selectedData = data?.filter((d, index: number) => {
        const rowId = index + 1; // Adjust the row identifier based on your data structure
        return selectedRows.includes(rowId);
    });

    return (
        <>
          {/* <select name='group' value={newUserAccount?.group} onChange={handleUserCreateInputChanges} className='input-md w-1/4 appearance-none'>
            {
              selectedData?.map((selected, index: number) => (
              <option key={index} value={selected.id}>
                {selected.custom_group_name}
              </option>
            ))}
          </select> */}
          <div className='group'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Group Select</th>
                  <th>Group Abbreviation</th>
                  <th>Group Name</th>
                  <th>Date Created</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.map((d, index: number) => {
                    const rowId = index + 1; // Adjust the row identifier based on your data structure
                    const isChecked = selectedRows.includes(rowId);
      
                    return (
                      <tr key={index}>
                        <td className='flex justify-center items-center'>
                          <input
                            type='checkbox'
                            className='w-4 h-4 rounded-[2px] appearance-auto checked:appearance-none checked:bg-gray-500before:checked:text-white checked:border checked:border-black'
                            checked={isChecked}
                            onChange={(event) => handleCheckboxChange(event, rowId)}
                          />
                        </td>
                        <td>{d.custom_group_abbreviation}</td>
                        <td>{d.custom_group_name}</td>
                        <td>{d.group_created_at}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          <div>
            <h2>Selected Data:</h2>
            <ul>
              {selectedData?.map((selected, index: number) => (
                <li key={index}>
                  {selected.custom_group_abbreviation} - {selected.custom_group_name}
                </li>
              ))}
            </ul>
        </div>
        <p>Selected Group: {newUserAccount?.group}</p> {/* Displaying the selected group */}
          </div>
        </>
      );
}

export default CustomTable
