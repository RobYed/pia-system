// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { fetchMiddlewares, HapiTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ParticipantController } from './controllers/public/participantController';
import { hapiAuthentication } from './auth';
// @ts-ignore - no great way to install types from subpackage
import { boomify, isBoom, type Payload } from '@hapi/boom';
import type { Request, ResponseToolkit, RouteOptionsPreAllOptions } from '@hapi/hapi';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Pseudonym": {
        "dataType": "refAlias",
        "type": {"dataType":"string","validators":{"pattern":{"value":"^[a-z0-9]+-[0-9]+$"}}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParticipantStatus": {
        "dataType": "refEnum",
        "enums": ["active","deactivated","deleted"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccountStatus": {
        "dataType": "refEnum",
        "enums": ["account","no_account"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParticipantDto": {
        "dataType": "refObject",
        "properties": {
            "pseudonym": {"ref":"Pseudonym","required":true},
            "ids": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "study": {"dataType":"string","required":true},
            "status": {"ref":"ParticipantStatus","required":true},
            "accountStatus": {"ref":"AccountStatus","required":true},
            "studyCenter": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "examinationWave": {"dataType":"union","subSchemas":[{"dataType":"integer"},{"dataType":"enum","enums":[null]}],"required":true},
            "isTestParticipant": {"dataType":"boolean","required":true},
            "firstLoggedInAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
            "deactivatedAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
            "deletedAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParticipantNotFoundError": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
            "causedBy": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ParticipantDto.pseudonym_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"pseudonym":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateParticipantResponseDto": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"Pick_ParticipantDto.pseudonym_"},{"dataType":"nestedObjectLiteral","nestedProperties":{"password":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StudyNotFoundError": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
            "causedBy": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PseudonymAlreadyExistsError": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
            "causedBy": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AccountCreateError": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
            "causedBy": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParticipantSaveError": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
            "causedBy": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Pick_ParticipantDto.pseudonym-or-ids-or-studyCenter-or-examinationWave-or-isTestParticipant__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"pseudonym":{"dataType":"string"},"ids":{"dataType":"string"},"studyCenter":{"dataType":"string"},"examinationWave":{"dataType":"integer"},"isTestParticipant":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateParticipantRequestDto": {
        "dataType": "refAlias",
        "type": {"ref":"Partial_Pick_ParticipantDto.pseudonym-or-ids-or-studyCenter-or-examinationWave-or-isTestParticipant__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Pick_ParticipantDto.ids-or-studyCenter-or-examinationWave-or-isTestParticipant__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"ids":{"dataType":"string"},"studyCenter":{"dataType":"string"},"examinationWave":{"dataType":"integer"},"isTestParticipant":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PatchParticipantRequestDto": {
        "dataType": "refAlias",
        "type": {"ref":"Partial_Pick_ParticipantDto.ids-or-studyCenter-or-examinationWave-or-isTestParticipant__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParticipantDeletionType": {
        "dataType": "refEnum",
        "enums": ["default","full"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new HapiTemplateService(
  models,
  {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true},
  { boomify, isBoom },
);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(server: any) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        const argsParticipantController_getParticipants: Record<string, TsoaRoute.ParameterSchema> = {
            studyName: {"in":"path","name":"studyName","required":true,"dataType":"string"},
        };
        server.route({
            method: 'get',
            path: '/public/studies/{studyName}/participants',
            options: {
                pre: [
                    {
                      method: authenticateMiddleware([{"jwt-public":[]}])
                    },
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController)),
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController.prototype.getParticipants)),
                ],
                handler: function ParticipantController_getParticipants(request: Request, h: ResponseToolkit) {

                    let validatedArgs: any[] = [];
                    try {
                        validatedArgs = templateService.getValidatedArgs({ args: argsParticipantController_getParticipants, request, h });
                    } catch (err) {
                        const error = err as any;
                        if (isBoom(error)) {
                            throw error;
                        }

                        const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                        boomErr.output.statusCode = error.status || 500;
                        boomErr.output.payload = {
                            name: error.name,
                            fields: error.fields,
                            message: error.message,
                        } as unknown as Payload;
                        throw boomErr;
                    }

                    const controller = new ParticipantController();

                    return templateService.apiHandler({
                      methodName: 'getParticipants',
                      controller,
                      h,
                      validatedArgs,
                      successStatus: undefined,
                    });
                }
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsParticipantController_getParticipant: Record<string, TsoaRoute.ParameterSchema> = {
            studyName: {"in":"path","name":"studyName","required":true,"dataType":"string"},
            pseudonym: {"in":"path","name":"pseudonym","required":true,"ref":"Pseudonym"},
        };
        server.route({
            method: 'get',
            path: '/public/studies/{studyName}/participants/{pseudonym}',
            options: {
                pre: [
                    {
                      method: authenticateMiddleware([{"jwt-public":[]}])
                    },
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController)),
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController.prototype.getParticipant)),
                ],
                handler: function ParticipantController_getParticipant(request: Request, h: ResponseToolkit) {

                    let validatedArgs: any[] = [];
                    try {
                        validatedArgs = templateService.getValidatedArgs({ args: argsParticipantController_getParticipant, request, h });
                    } catch (err) {
                        const error = err as any;
                        if (isBoom(error)) {
                            throw error;
                        }

                        const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                        boomErr.output.statusCode = error.status || 500;
                        boomErr.output.payload = {
                            name: error.name,
                            fields: error.fields,
                            message: error.message,
                        } as unknown as Payload;
                        throw boomErr;
                    }

                    const controller = new ParticipantController();

                    return templateService.apiHandler({
                      methodName: 'getParticipant',
                      controller,
                      h,
                      validatedArgs,
                      successStatus: undefined,
                    });
                }
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsParticipantController_postParticipant: Record<string, TsoaRoute.ParameterSchema> = {
            studyName: {"in":"path","name":"studyName","required":true,"dataType":"string"},
            participant: {"in":"body","name":"participant","required":true,"ref":"CreateParticipantRequestDto"},
        };
        server.route({
            method: 'post',
            path: '/public/studies/{studyName}/participants',
            options: {
                pre: [
                    {
                      method: authenticateMiddleware([{"jwt-public":[]}])
                    },
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController)),
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController.prototype.postParticipant)),
                ],
                handler: function ParticipantController_postParticipant(request: Request, h: ResponseToolkit) {

                    let validatedArgs: any[] = [];
                    try {
                        validatedArgs = templateService.getValidatedArgs({ args: argsParticipantController_postParticipant, request, h });
                    } catch (err) {
                        const error = err as any;
                        if (isBoom(error)) {
                            throw error;
                        }

                        const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                        boomErr.output.statusCode = error.status || 500;
                        boomErr.output.payload = {
                            name: error.name,
                            fields: error.fields,
                            message: error.message,
                        } as unknown as Payload;
                        throw boomErr;
                    }

                    const controller = new ParticipantController();

                    return templateService.apiHandler({
                      methodName: 'postParticipant',
                      controller,
                      h,
                      validatedArgs,
                      successStatus: 201,
                    });
                }
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsParticipantController_patchParticipant: Record<string, TsoaRoute.ParameterSchema> = {
            studyName: {"in":"path","name":"studyName","required":true,"dataType":"string"},
            pseudonym: {"in":"path","name":"pseudonym","required":true,"ref":"Pseudonym"},
            participantPatch: {"in":"body","name":"participantPatch","required":true,"ref":"PatchParticipantRequestDto"},
        };
        server.route({
            method: 'patch',
            path: '/public/studies/{studyName}/participants/{pseudonym}',
            options: {
                pre: [
                    {
                      method: authenticateMiddleware([{"jwt-public":[]}])
                    },
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController)),
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController.prototype.patchParticipant)),
                ],
                handler: function ParticipantController_patchParticipant(request: Request, h: ResponseToolkit) {

                    let validatedArgs: any[] = [];
                    try {
                        validatedArgs = templateService.getValidatedArgs({ args: argsParticipantController_patchParticipant, request, h });
                    } catch (err) {
                        const error = err as any;
                        if (isBoom(error)) {
                            throw error;
                        }

                        const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                        boomErr.output.statusCode = error.status || 500;
                        boomErr.output.payload = {
                            name: error.name,
                            fields: error.fields,
                            message: error.message,
                        } as unknown as Payload;
                        throw boomErr;
                    }

                    const controller = new ParticipantController();

                    return templateService.apiHandler({
                      methodName: 'patchParticipant',
                      controller,
                      h,
                      validatedArgs,
                      successStatus: undefined,
                    });
                }
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsParticipantController_deleteParticipant: Record<string, TsoaRoute.ParameterSchema> = {
            studyName: {"in":"path","name":"studyName","required":true,"dataType":"string"},
            pseudonym: {"in":"path","name":"pseudonym","required":true,"ref":"Pseudonym"},
            deletionType: {"default":"default","in":"query","name":"deletionType","ref":"ParticipantDeletionType"},
        };
        server.route({
            method: 'delete',
            path: '/public/studies/{studyName}/participants/{pseudonym}',
            options: {
                pre: [
                    {
                      method: authenticateMiddleware([{"jwt-public":[]}])
                    },
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController)),
                    ...(fetchMiddlewares<RouteOptionsPreAllOptions>(ParticipantController.prototype.deleteParticipant)),
                ],
                handler: function ParticipantController_deleteParticipant(request: Request, h: ResponseToolkit) {

                    let validatedArgs: any[] = [];
                    try {
                        validatedArgs = templateService.getValidatedArgs({ args: argsParticipantController_deleteParticipant, request, h });
                    } catch (err) {
                        const error = err as any;
                        if (isBoom(error)) {
                            throw error;
                        }

                        const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                        boomErr.output.statusCode = error.status || 500;
                        boomErr.output.payload = {
                            name: error.name,
                            fields: error.fields,
                            message: error.message,
                        } as unknown as Payload;
                        throw boomErr;
                    }

                    const controller = new ParticipantController();

                    return templateService.apiHandler({
                      methodName: 'deleteParticipant',
                      controller,
                      h,
                      validatedArgs,
                      successStatus: 204,
                    });
                }
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, h: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            hapiAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            hapiAuthentication(request, name, secMethod[name])
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                return request['user'];
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                if (isBoom(error)) {
                    throw error;
                }

                const boomErr = boomify(error instanceof Error ? error : new Error(error.message));
                boomErr.output.statusCode = error.status || 401;
                boomErr.output.payload = {
                    name: error.name,
                    message: error.message,
                } as unknown as Payload;

                throw boomErr;
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
