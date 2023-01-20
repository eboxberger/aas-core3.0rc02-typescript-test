const aas = require("@aas-core-works/aas-core3.0rc02-typescript");

const shell = new aas.types.AssetAdministrationShell("123", new aas.types.AssetInformation(aas.types.AssetKind.Instance));

console.log(shell);