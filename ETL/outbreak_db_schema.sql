CREATE TABLE "outbreaks" (
    "ID" INTEGER   NOT NULL,
    "Institution_Name" VARCHAR   NOT NULL,
    "Institution_Address" VARCHAR   NOT NULL,
    "Outbreak_Setting" VARCHAR   NOT NULL,
    "Type_of_Outbreak" VARCHAR   NOT NULL,
    "Causative_Agent" VARCHAR   NOT NULL,
    "Date_Outbreak_Began" DATE   NOT NULL,
    "Date_Declared_Over" DATE,
    "Outbreak_Status" VARCHAR   NOT NULL,
    "Longitude" DEC   NOT NULL,
    "Latitude" DEC   NOT NULL,
    "Outbreak Year" VARCHAR   NOT NULL,
    "Outbreak Month" VARCHAR   NOT NULL,
    "Outbreak Season" VARCHAR   NOT NULL,
    CONSTRAINT "pk_Outbreak_Table" PRIMARY KEY (
        "ID"
    )
);

CREATE TABLE "outbreaks_by_year_season" (
    "Outbreak Year" VARCHAR NOT   NULL,
    "Outbreak Season" VARCHAR   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);

CREATE TABLE "outbreak_settings" (
    "Outbreak Year" VARCHAR NOT   NULL,
    "Outbreak Setting" VARCHAR   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);

CREATE TABLE "outbreak_setting_by_year" (
    "ID" INT   NOT NULL,
    "Outbreak Year" INT NOT   NULL,
    "Outbreak Setting" VARCHAR   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);

CREATE TABLE "outbreak_setting_all_years" (
    "Outbreak Setting" VARCHAR   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);

CREATE TABLE "top_10_outbreak_duration" (
    "ID" INT   NOT NULL,
    "Institution" VARCHAR   NOT NULL,
    "Average Outbreak Duration" VARCHAR   NOT NULL
);

CREATE TABLE "bottom_10_outbreak_duration" (
    "ID" INT   NOT NULL,
    "Institution" VARCHAR   NOT NULL,
    "Average Outbreak Duration" VARCHAR   NOT NULL
);

CREATE TABLE "outbreaks_by_year" (
    "Outbreak Year" INT   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);

CREATE TABLE "outbreaks_by_year_type" (
    "Type of Outbreak" VARCHAR   NOT NULL,
    "Outbreak Year" INT   NOT NULL,
    "Count of Outbreaks" INT   NOT NULL
);


