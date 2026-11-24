import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '159e0a0ec398db50fc063f0d0501311e': {
                        table: 'sys_kmf_module_key_policy'
                        id: '159e0a0ec398db50fc063f0d0501311e'
                    }
                    '1b0d40a8c3585710fc063f0d05013186': {
                        table: 'sys_security_acl'
                        id: '1b0d40a8c3585710fc063f0d05013186'
                    }
                    '5aeba725c39c5750fc063f0d05013145': {
                        table: 'sys_package_dependency_m2m'
                        id: '5aeba725c39c5750fc063f0d05013145'
                    }
                    '739cbca8c3909710fc063f0d050131d9': {
                        table: 'oauth_entity_profile'
                        id: '739cbca8c3909710fc063f0d050131d9'
                    }
                    '8cfac4e0c3585710fc063f0d05013128': {
                        table: 'sys_embedded_help_role'
                        id: '8cfac4e0c3585710fc063f0d05013128'
                    }
                    a30d40a8c3585710fc063f0d050131e4: {
                        table: 'sys_security_acl'
                        id: 'a30d40a8c3585710fc063f0d050131e4'
                    }
                    acbb4824c3585710fc063f0d0501312c: {
                        table: 'sys_kmf_crypto_caller_policy'
                        id: 'acbb4824c3585710fc063f0d0501312c'
                    }
                    b70d80a8c3585710fc063f0d0501319d: {
                        table: 'sys_security_acl'
                        id: 'b70d80a8c3585710fc063f0d0501319d'
                    }
                    bb0d80a8c3585710fc063f0d05013102: {
                        table: 'sys_security_acl'
                        id: 'bb0d80a8c3585710fc063f0d05013102'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '8aef51e54c5a4f3889b3c0d4b18bad95'
                    }
                    c4fac4e0c3585710fc063f0d05013164: {
                        table: 'sys_embedded_help_role'
                        id: 'c4fac4e0c3585710fc063f0d05013164'
                    }
                    db0d4c68c3585710fc063f0d050131c6: {
                        table: 'sys_embedded_help_role'
                        id: 'db0d4c68c3585710fc063f0d050131c6'
                    }
                    f049f060c3909710fc063f0d05013110: {
                        table: 'oauth_entity'
                        id: 'f049f060c3909710fc063f0d05013110'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '91d6cdb7552c46b1b808e75b40bdf74f'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role'
                        id: '04fac4e0c3585710fc063f0d05013162'
                        key: {
                            name: 'x_1637173_sd_my_0.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10c42003e9ca4d1f99774d70c53bcd76'
                        key: {
                            name: 'incident'
                            element: 'x_1637173_sd_my_0_git_check'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '118353edb3b843aa8d8a08d779dd1ab6'
                        key: {
                            name: 'x_1637173_sd_my_0_sd_my_table'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2543eb45484e4c8f891fdd4aeea0b0b0'
                        key: {
                            name: 'customer_account'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27d742c18fbf49939a0042c7878c4112'
                        key: {
                            name: 'customer_account'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73378bebb9e24689bbd5e29781d9c2c7'
                        key: {
                            name: 'incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '770d80a8c3585710fc063f0d05013110'
                        key: {
                            sys_security_acl: 'bb0d80a8c3585710fc063f0d05013102'
                            sys_user_role: {
                                id: 'cb0d4c68c3585710fc063f0d050131c3'
                                key: {
                                    name: 'x_1637173_sd_my_0.sd_my_table_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7f0d80a8c3585710fc063f0d050131dc'
                        key: {
                            sys_security_acl: 'b70d80a8c3585710fc063f0d0501319d'
                            sys_user_role: {
                                id: 'cb0d4c68c3585710fc063f0d050131c3'
                                key: {
                                    name: 'x_1637173_sd_my_0.sd_my_table_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8419130eeca047b1a916206059a5cbbb'
                        key: {
                            name: 'incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85f40d303fdd4c1586b9ee4ee9526235'
                        key: {
                            name: 'x_1637173_sd_my_0_sd_my_table'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8cccc068c3585710fc063f0d05013122'
                        key: {
                            name: 'x_1637173_sd_my_0_sd_my_table'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8e1cb4ab50b444bdb308fb90b3fca3dd'
                        key: {
                            name: 'incident'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '901dc0a8c3585710fc063f0d05013191'
                        key: {
                            name: 'x_1637173_sd_my_0_sd_my_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aa63747cb859482299178e73f0ad9e07'
                        key: {
                            name: 'customer_account'
                            element: 'x_1637173_sd_my_0_classify'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1ce834c27724027848cbd0fd7e59768'
                        key: {
                            name: 'incident'
                            element: 'x_1637173_sd_my_0_git_check'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'bbeac4e0c3585710fc063f0d05013123'
                        key: {
                            name: 'x_1637173_sd_my_0.admin'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c6d54640c3713210fc063f0d050131da'
                        key: {
                            name: 'customer_account'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'caa69240d738448793aff1ee7228222c'
                        key: {
                            name: 'customer_account'
                            element: 'x_1637173_sd_my_0_classify'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'cb0d4c68c3585710fc063f0d050131c3'
                        key: {
                            name: 'x_1637173_sd_my_0.sd_my_table_user'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e30d40a8c3585710fc063f0d050131cf'
                        key: {
                            sys_security_acl: '1b0d40a8c3585710fc063f0d05013186'
                            sys_user_role: {
                                id: 'cb0d4c68c3585710fc063f0d050131c3'
                                key: {
                                    name: 'x_1637173_sd_my_0.sd_my_table_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff0d40a8c3585710fc063f0d050131f1'
                        key: {
                            sys_security_acl: 'a30d40a8c3585710fc063f0d050131e4'
                            sys_user_role: {
                                id: 'cb0d4c68c3585710fc063f0d050131c3'
                                key: {
                                    name: 'x_1637173_sd_my_0.sd_my_table_user'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
