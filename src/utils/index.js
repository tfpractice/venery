import * as animals from './animals';
import * as rqUtils from './requests';
import * as wordnik from './wordnik';
import * as taxonomy from './taxonomy';

export * from './themer';
export * from './thenable';
export * from './forms';

export { animals, rqUtils, wordnik, taxonomy, };

// const enums = [ 'BasisOfRecord', 'CitesAppendix', 'ContactType', 'Continent',
//   'Country', 'DatasetSubtype', 'DatasetType', 'EndpointType',
//   'EstablishmentMeans', 'Extension', 'GbifRegion', 'Habitat',
//   'IdentifierType', 'InstallationType', 'InterpretationRemarkSeverity',
//   'Kingdom', 'Language', 'License', 'LifeStage', 'MaintenanceUpdateFrequency',
//   'MediaType', 'MetadataType', 'NamePart', 'NameType', 'NameUsageIssue', 'NodeType',
//   'NomenclaturalCode', 'NomenclaturalStatus', 'OccurrenceIssue',
//   'OccurrencePersistenceStatus', 'OccurrenceSchemaType', 'OccurrenceStatus',
//   'Origin', 'ParticipationStatus', 'PreservationMethodType',
//   'ProcessingErrorType', 'Rank', 'RelationType', 'Sex', 'TagName',
//   'TagNamespace', 'TaxonomicStatus', 'TechnicalInstallationType',
//   'ThreatStatus', 'TypeDesignationType', 'TypeStatus', 'UserRole', ];
