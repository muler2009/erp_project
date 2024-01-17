type valueProps = string | number;

export interface InputInterface {
    id: string;
    type: string;
    name: string;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: valueProps ;
    label?: string;
    className: string;
}