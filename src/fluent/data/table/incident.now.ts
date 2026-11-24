import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const incident = Table({
    augments: 'incident',
    schema: {
        x_1637173_sd_my_0_git_check: StringColumn({
            label: 'Git Check',
        }),
        x_1637173_sd_my_0_git_check_t_f: BooleanColumn({
            label: 'Git Check T/F',
        }),
    },
})
