import { createColumnHelper, CellContext } from "@tanstack/react-table";
import { GroupColumn, GroupInterface } from "../../../../models/group.model";
import * as AiIcons from "react-icons/ai";
import * as PiIcons from "react-icons/pi"
import Tooltip from "../../../../components/reusable/Tooltip";
import { useState } from "react";
import CreateRoles from "../../modals/CreateRoles";


const columnHelper = createColumnHelper<GroupColumn>()

interface ActionCellProps {
    info: CellContext<GroupInterface, boolean | string | undefined>;
  }
  
  const AddSubGroup: React.FC<ActionCellProps> = ({ info }) => {
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
        cell: ({row}) => {
            const value = row.original
            return(
                <div className="">
                    {
                        value.has_sub_group 
                        ? <PiIcons.PiFolderSimplePlusFill  size={20} color="black" onClick={() => alert(`${value.has_sub_group}`)}/>
                        : <PiIcons.PiFolderSimpleMinusFill size={20} color="black" />
                    
                    }
                </div>
            )

        },
        
        enableSorting: false
    }),

    columnHelper.accessor(row => row.custom_group_abbreviation, {
        id: "Group Abbreviation",
        cell: row => (
            <p className='text-black text-opacity-60'>{row.getValue()}</p>
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