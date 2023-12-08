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
    CONSTRAINT "pk_Outbreak_Table" PRIMARY KEY (
        "ID"
    )
);

