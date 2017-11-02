/*
 * Copyright 2015-2016 OpenCB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by imedina on 05/06/17.
 */
const filter = {
    missing: true,
    searchButtonText: "Search",
    study: {
        title: "Study and Cohorts",
        collapsed: false,
        samples: {
            visibility: "public",
            selector: true,
            segregation: ["Autosomal Dominant", "Autosomal Recessive", "Compound Heterocygotous", "Recessive X-linked"]
        },
        cohorts: {
            visibility: "public",
            cohortPerStudy: {
                "1kG_phase3": [{id: "ALL", name: "All"}, {id: "MXL", name: "Mexican"}],
                "EXAC": [{id: "ALL", name: "All"}]
            }
        },
        scores: {
            visibility: "none",
            tooltip: ""
        },
        studies: {
            visibility: "public"
        },
        clinicalData: {
            visibility: "none"
        }
    },
    genomic: {
        chromosomalLocation:{
            tooltip: "Filter out variants falling outside the genomic interval(s) defined"
        },
        featureIds:{
            tooltip: "Filter out variants falling outside the genomic features (gene, transcript, SNP, etc.) defined"
        },
        geneDiseasePanels:{
            tooltip: "Filter out variants falling outside the genomic intervals (typically genes) defined by the panel(s) chosen"
        },
        variantType:{
            tooltip: "Only considers variants of the selected type"
        }

    },
    populationFrequency:{
        _1000Genomes:{

        },
        exAC:{

        },
        eSP6500:{

        }
    },
    deleteriousness:{
        proteinSubstitutionScore:{
            tooltip:"SIFT score. Choose either a Tolerated/Deleterious qualitative score or provide below a quantitative impact value. SIFT scores <0.05 are considered deleterious. Polyphen: Choose, either a Benign/probably damaging qualitative score or provide below a quantitative impact value. Polyphen scores are considered Benign (<0.15), Possibly damaging (0.15-0.85) or Damaging (>0.85)"
        },
        cADD:{
            tooltip:"Raw values have relative meaning, with higher values indicating that a variant is more likely to be simulated (or not observed) and therefore more likely to have deleterious effects. If discovering causal variants within an individual, or small groups, of exomes or genomes te use of the scaled CADD score is recommended."
        }
    },
    conservation: {
        showLogicalOperator: false,
        tooltip: ""
    }

};

let filterClinical = filter;
filterClinical.study.title = "Study";
filterClinical.study.samples.visibility = "public";
filterClinical.study.cohorts.visibility = "none";
filterClinical.study.scores.visibility = "none";
filterClinical.study.studies.visibility = "none";
filterClinical.study.clinicalData.visibility = "none";

const tools = {
    browser: {
        title: "Variant Browser",
        active: false,
        filters: [
            {
                name: "Example BRCA2",
                query: {
                    gene: "BRCA2",
                    conservation: "phylop<0.001"
                },
            },
            {
                name: "Example OR11",
                query: {
                    gene: "OR11H1",
                    conservation: "phylop<=0.001"
                },
            },
        ],
        filter: filter
    },
    prioritization: {
        title: "Prioritization",
        active: false,
        filters: [
            {
                name: "Example BRCA2",
                query: {
                    gene: "BRCA2",
                    conservation: "phylop<0.001",
                },
            },
            {
                name: "Example OR11",
                query: {
                    gene: "OR11H1",
                    conservation: "phylop<=0.001",
                },
            },
        ],
        filter: filter
    },
    interpretation: {
        active: false
    },
    gene: {
        protein: {
            color: {
                synonymous_variant: "blue",
                coding_sequence_variant: "blue",
                missense_variant: "orange",
                protein_altering_variant: "orange",
                start_lost: "red",
                stop_gained: "red",
                stop_lost: "red",
                stop_retained_variant: "red",
            },
        },
        active: false,
    },
    facet: {
        fields: [
            {
                name: "Chromosome",
                value: "chromosome",
            },
            {
                name: "Studies",
                value: "studies",
            },
            {
                name: "Variant Type",
                value: "type",
            },
            {
                name: "Genes",
                value: "genes",
            },
            {
                name: "Biotypes",
                value: "biotypes",
            },
            {
                name: "Consequence Type",
                value: "soAcc",
            },
        ],
        ranges: [
            {
                name: "PhastCons",
                value: "phastCons",
            },
            {
                name: "PhyloP",
                value: "phylop",
            },
            {
                name: "Gerp",
                value: "gerp",
            },
            {
                name: "CADD Raw",
                value: "caddRaw",
            },
            {
                name: "CADD Scaled",
                value: "caddScaled",
            },
            {
                name: "Sift",
                value: "sift",
            },
            {
                name: "Polyphen",
                value: "polyphen",
            },
        ],
        active: false,
        filter: filter
    },
    beacon: {
        hosts: [
            "brca-exchange", "cell_lines", "cosmic", "wtsi", "wgs", "ncbi", "ebi", "ega", "broad", "gigascience", "ucsc", "lovd", "hgmd", "icgc", "sahgp",
        ],
        active: false,
    },
    clinical: {
        interpretation: {
            algorithms: ["Tiering", "Exomiser", "VAAST"]
        },
        variableSet: {
            name: "clinical_vs",
            exclude: [
                {
                    webComponent: "variant-samples-filter",
                    variables: ["HPO", "diagnosis"],
                },
            ],

        },
        chromosomal_gender: ["XX", "XY", "XO", "XXY", "XXX", "XXYY", "XXXY", "XXXX", "XYY", "OTHER", "UNKNOWN"],
        ethnicity: [
            {
                id: "white_mediterranean",
                title: "white mediterranean",
            },
            {
                id: "white_caucasian",
                title: "white caucasian",
            },
            {
                id: "black",
                title: "black",
            },
            {
                id: "asiatic",
                title: "asiatic",
            },
            {
                id: "amerindian",
                title: "amerindian",
            },
            {
                id: "gipsy",
                title: "gipsy",
            },
            {
                id: "arabic",
                title: "arabic",
            },
            {
                id: "hindu",
                title: "hindu",
            },
            {
                id: "australian_native",
                title: "australian native",
            },
            {
                id: "askenazi_jew",
                title: "askenazi jew",
            },
            {
                id: "sefardi_jew",
                title: "sefardi jew",
            },
            {
                id: "ne",
                title: "NE/Unkonwn",
            },
        ],
        countries: ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom", "United States", "Other"],
        province: ["Albacete", "Alicante", "Almeria", "Álava", "Asturias", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres",
            "Cádiz", "Cantabria", "Castellón", "Ceuta", "Ciudad Real", "Cordoba", "Coruña, La", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva",
            "Huesca", "Jaén", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia", "Palmas, Las", "Pontevedra", "Rioja, La",
            "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora",
            "Zaragoza"],
        status: [
            {
                id: "AFFECTED",
                title: "Affected",
            },
            {
                id: "UNAFFECTED",
                title: "Unaffected",
            },
            {
                id: "CONTROL",
                title: "Control",
            },
            {
                id: "UNKNOWN",
                title: "Unknown",
            },
        ],
        life_status: [
            {
                id: "ALIVE",
                title: "Alive",
            },
            {
                id: "ABORTED",
                title: "Aborted",
            },
            {
                id: "DECEASED",
                title: "Deceased",
            },
            {
                id: "UNBORN",
                title: "Unborn",
            },
            {
                id: "STILLBORN",
                title: "Still-born",
            },
            {
                id: "MISCARRIAGE",
                title: "Miscarriage",
            },
            {
                id: "UNKNOWN",
                title: "Unknown",
            },
        ],
        sample_type: [
            {
                id: "blood",
                title: "blood",
            },
            {
                id: "amniotic_fluid",
                title: "amniotic fluid",
            },
            {
                id: "chorionic_villi",
                title: "chorionic villi",
            },
            {
                id: "circulating_fetal",
                title: "circulating fetal",
            },
            {
                id: "circulating_tumor",
                title: "circulating tumor",
            },
            {
                id: "tissue_fresh",
                title: "tissue (fresh)",
            },
            {
                id: "other_fluids",
                title: "other fluids",
            },
            {
                id: "ne",
                title: "ne/unknown",
            },
        ],
        cell_line: [
            {
                id: "germline",
                title: "constitutive (germline)",
                checked: true,
            },
            {
                id: "somatic",
                title: "somatic",
                checked: false,
            },
        ],
        active: false,
        filter: filterClinical
    },
    genomeBrowser: {
        active: false,
    },
};
