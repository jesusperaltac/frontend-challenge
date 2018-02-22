export interface System {
    id: string;
    org_id: number;
    digital_server_id: string;
    server_arch_id: number;
    os: string;
    release: string; 
    name: string; 
    description: string; 
    info: string; 
    secret: string; 
    creator_id: number; 
    auto_update: string;
    contact_method_id: number; 
    running_kernel: string; 
    last_boot: number; 
    provision_state_id: string; 
    channels_changed: number; 
    cobbler_id: string; 
    machine_id: string; 
    hostname: string;
    created: number; 
    modified: number;    
}