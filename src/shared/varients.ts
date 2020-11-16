export enum Varient {
    Primary, 
    Secondary, 
    Success,
    Danger, 
    Warning, 
    Info, 
    Dark,     
}

export const parseNumToVarient = (num: Varient) =>{
    if(num == Varient.Primary) return 'primary';
    if(num == Varient.Secondary) return 'secondary';
    if(num == Varient.Success) return 'success';
    if(num == Varient.Danger) return 'danger';
    if(num == Varient.Warning) return 'warning';
    if(num == Varient.Info) return 'info';
    if(num == Varient.Dark) return 'dark';
    else return Varient.Primary;
}