/**
 * @author krish
 */

const mongoose = require('mongoose')

const docsSchema = new mongoose.Schema(
    {
        userId: mongoose.Schema.ObjectId,
        profilePhoto: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        consentForm: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        photoIdentification: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        eligibilityToWork: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        medicalEmergency: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        securityGuardLicence: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        smartServ: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        policeFoundations: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        healthAndSafety: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        },
        resume: {
            name: {
                type: String,
                default: null
            },
            data: {
                type: Buffer,
                default: null
            },
            contentType: {
                type: String,
                default: null
            },
            isApproved: {
                type: Boolean,
                default: false
            },
            note: {
                type: String,
                default: ''
            },
            createdAt: {
                type: String,
                default: new Date().toISOString()
            },
            updatedAt: {
                type: String,
                default: ''
            }
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('userDocs', docsSchema, 'userDocs')
