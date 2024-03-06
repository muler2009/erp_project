export interface GroupInterface {
    id?: number,
    custom_group_abbreviation: string,
    custom_group_name: string,
    group_created_at?: string | undefined,
    group_modified_at?: string | undefined
    has_sub_group?: boolean,
    sub_group_name?: string | undefined,
    sub_group_abbreviation?: string | undefined 
}
export interface SubGroupInterface {
    sub_group_name: string | undefined,
    sub_group_abbreviation: string | undefined,
    group: string,
}

export interface GroupColumn extends GroupInterface{    
    action?: unknown
}

export interface GroupAPIResponse extends GroupInterface{
    status?: number,
    statusText?: string,
    data: GroupInterface[]
    
}