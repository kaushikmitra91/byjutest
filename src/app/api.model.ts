export interface ProviderModel {
    'Course Id': number;
    'Course Name': string;
    'Provider': string;
    'Universities': {
        'Institutions': string;
    };
    'Parent Subject': string;
    'Child Subject': string;
    'Url': string;
    'Next Session Date': string;
    'Length': number;
    'Video(Url)': string;
}