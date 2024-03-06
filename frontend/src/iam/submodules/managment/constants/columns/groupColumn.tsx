import React, {useRef, useEffect, HTMLProps} from "react";
import { createColumnHelper, CellContext } from "@tanstack/react-table";
import { GroupColumn, GroupInterface } from "../../../../models/group.model";
import * as AiIcons from "react-icons/ai";
import * as PiIcons from "react-icons/pi"
import Tooltip from "../../../../components/reusable/Tooltip";
import { useState } from "react";
import CreateRoles from "../../modals/CreateRoles";
import useCreateUserAccount from "../../user/context/useCreateUserAccount";
import { UserGroup } from "../../../../models/user.model";


const columnHelper = createColumnHelper<GroupColumn>()

interface ActionCellProps {
    info: CellContext<GroupInterface, boolean | string | undefined>;
}


interface SelectedCellProps {
  info: CellContext<UserGroup, string | undefined>;
}


const AttachGroupCheckBoxCell = ({ info }: SelectedCellProps ) => {
    const {setUserNewAccount, handleUserCreateInputChanges, newUserAccount} = useCreateUserAccount()
   
    const handleSelectTest =(info: CellContext<UserGroup, string | undefined>)  => {
        const {custom_group_abbreviation, custom_group_name} = info.row.original
        console.log("Selected row:", custom_group_abbreviation, custom_group_name);
        setUserNewAccount(prevData => ({
            ...prevData,
            group: info.row.original.custom_group_name
            
        }))
    }

    console.log(newUserAccount?.group)
   
    return(
    <AttachGroupCheckBox
        checked={info.row.getIsSelected()}
        disabled={!info.row.getCanSelect()}
        indeterminate={info.row.getIsSomeSelected()}
        onChange={() => handleSelectTest(info)}  
    />
    )
}

  const AddSubGroup = ({ info }: ActionCellProps) => {
    const value = info.row.original;
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        {
            value.has_sub_group ? ( 
                <Tooltip content={`Add sub-roup`}>
                    <AiIcons.AiFillFolderAdd  onClick={() => setIsOpen(prev => !prev)}/>
                </Tooltip>
            ): (
                <Tooltip content={`Adding subgroup Denied`}>
                    <AiIcons.AiOutlineStop  className="cursor-default"/>

                </Tooltip>
            )
            
        }

        <CreateRoles isOpen={isOpen} setIsOpen={setIsOpen} title="Edit columns" />
        
       
      </>
    );
  };

export const GROUP_COLUMN = [

    columnHelper.accessor(row => row.action, {
        header: "Actions",
        cell: (props) => {
            const value = props.row.original 
            return(
             <>
                {
                    value.has_sub_group 
                    ? (
                        props.row.getCanExpand() 
                        ? (
                            <>
                                <PiIcons.PiFolderSimplePlusFill  size={20} color="black" onClick={props.row.getToggleExpandedHandler()}/>
                                <button onClick={props.row.getToggleExpandedHandler()}>
                                    toogle
                                </button>
                            </>
                        ) 
                        : null
                    ) 
                    : null
                }
                {props.getValue()}
                
             </>
            )
        },
        
        enableSorting: false,
    }),

    columnHelper.accessor(row => row.custom_group_abbreviation, {
        id: "Group Abbreviation",
        cell: (props) => (
            <>
            {/* <PiIcons.PiFolderSimplePlusFill  size={20} color="black" onClick={props.row.getToggleExpandedHandler()}/> */}
            <p className='text-black text-opacity-60'>{props.getValue()}</p>
            </>
        )
    }),

    columnHelper.accessor(row => row.custom_group_name, {
        id: "Group Name",
        cell: row => (
            <p className="text-black text-opacity-60">
                {row.getValue()}
            </p>
        )
    }),
    columnHelper.accessor(row => row.group_created_at, {
        id: 'Date Created',
        cell: info => info.getValue(),
        enableSorting: false,
    }),
    
    columnHelper.accessor(row => row.action, {
        header: "Action",
        cell: (info: CellContext<GroupInterface, boolean | string | undefined>) => <AddSubGroup info={info} />,
        enableSorting: false
    }),
  
]


{/** Checkbox defination for group attachement */}

const AttachGroupCheckBox = ({ indeterminate, className=' ', ...rest }: { indeterminate?: boolean} & HTMLProps<HTMLInputElement>) => {
    const ref = useRef<HTMLInputElement>(null!);  
    useEffect(() => {
      if (typeof indeterminate === 'boolean') {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }, [ref, indeterminate]);
    
    return (
      <input
        type="checkbox"
        ref={ref}
        className={`w-3 h-3 rounded-[2px] appearance-auto checked:appearance-none checked:bg-gray-500 before:checked:text-white ${className}`}
        {...rest}
         
      />
    );
};


export const GROUP_COLUMN_WITH_SELECTION = [

    columnHelper.accessor(row => row.action, {
        id: 'select',
        header: ({ table }) => {
            return (
                <AttachGroupCheckBox 
                    checked={table.getIsAllRowsSelected()}
                    indeterminate-={table.getIsSomeRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}                
                />
            )
        },
        cell: (info: CellContext<UserGroup, | string | undefined>) => <AttachGroupCheckBoxCell info={info} />,
      },
          
    ),

    columnHelper.accessor(row => row.custom_group_abbreviation, {
        id: "Group Abbreviation",
        cell: (props) => (
            <>
            {/* <PiIcons.PiFolderSimplePlusFill  size={20} color="black" onClick={props.row.getToggleExpandedHandler()}/> */}
            <p className='text-black text-opacity-60'>{props.getValue()}</p>
            </>
        )
    }),

    columnHelper.accessor(row => row.custom_group_name, {
        id: "Group Name",
        cell: row => (
            <p className="text-black text-opacity-60">
                {row.getValue()}
            </p>
        )
    }),
    columnHelper.accessor(row => row.group_created_at, {
        id: 'Date Created',
        cell: info => info.getValue(),
        enableSorting: false,
    }),
    
    columnHelper.accessor(row => row.action, {
        header: "Action",
        cell: (info: CellContext<GroupInterface, boolean | string | undefined>) => <AddSubGroup info={info} />,
        enableSorting: false
    }),
  
]