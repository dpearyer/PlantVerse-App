export interface PlantInterface{
            "id": string,
            "common_name": string,
            "scientific_name": [
                string
            ],
            "cycle": string,
            "watering": string,
            "sunlight": [],
            "other_name": null,
            "default_image": {
                "image_id": number,
                "license": number,
                "license_name": string,
                "license_url": string,
                "original_url": string,
                "regular_url": string,
                "medium_url": string,
                "small_url": string,
                "thumbnail": string
            }
        }