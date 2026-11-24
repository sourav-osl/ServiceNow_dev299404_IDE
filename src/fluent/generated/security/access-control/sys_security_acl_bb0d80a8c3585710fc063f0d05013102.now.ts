import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bb0d80a8c3585710fc063f0d05013102'],
    description:
        'Allow write for records in x_1637173_sd_my_0_sd_my_table, for users with role x_1637173_sd_my_0.sd_my_table_user.',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_1637173_sd_my_0.sd_my_table_user'],
    table: 'x_1637173_sd_my_0_sd_my_table',
})
