
var request = require('request'); 
var url = 'https://test.api.acxiom.com/people/er/6305550101'; 
var queryParams = '?' +  encodeURIComponent('format') + '=' +encodeURIComponent('json')+ '&' +  encodeURIComponent('limit') + '=' +encodeURIComponent('2'); 
request({ 
    url: url + queryParams, 
    headers: { 'Authorization':'Bearer 91231d04-aacd-42ca-a1c4-1b5bb927da5d'  },
    method: 'GET' 
}, function (error, response, body) { 
console.log('Status', response.statusCode);  
console.log('Headers', JSON.stringify(response.headers)); 
console.log('Reponse received', body); 
});

/*
{
  "group": {
    "people": [
      {
        "person": {
          "id": "5a5a5a5a00d1259d57e2097710dba53c20a26e7db6",
          "householdId": "5a5a5a5a00a79fccf6161710dc0ba145ee312cc1c2",
          "abilitec": {
            "consumerLink": "ZZZZUS02SSF6B3E3"
          },
          "dob": {
            "dob": "19500000"
          },
          "postalContact": [
            {
              "firstName": "MARY",
              "lastName": "ROBBINSON",
              "primaryNumber": "3333",
              "street": "FINLEY",
              "streetSuffix": "RD",
              "city": "DOWNERS GROVE",
              "state": "IL",
              "zipCode": "60515",
              "zipExtension": "1126"
            }
          ],
          "phoneContact": [
            {
              "firstName": "MARY",
              "lastName": "ROBINSON",
              "phone": "5015550101"
            }
          ],
          "emailContact": [
            {
              "firstName": "MARY",
              "lastName": "ROBBINSON",
              "email": "MARYROBIN1TEST@ACXIOM.COM"
            },
            {
              "firstName": "MARY",
              "lastName": "ROBINSON",
              "email": "MARYROBIN2TEST@ACXIOM.COM"
            }
          ],
          "bankingAndServices": {
            "payBillsInPerson": "Likely",
            "payBillsOnline": "Likely",
            "underBanked": "Somewhat unlikely"
          },
          "basicDemographics": {
            "age": 64,
            "consumerProminenceIndicator": "Large marketing footprint",
            "deceased": true,
            "employmentStatus": "Not employed",
            "gender": "Female",
            "lengthOfResidence": 4,
            "maritalStatus": "Single",
            "occupation": "Professional",
            "ownerRenter": "Owner"
          },
          "causesAndVolunteer": {
            "donation": true
          },
          "creditAndBankCards": {
            "creditCardPurchaseFrequency": {
              "months0to3": 1,
              "months7to9": 1,
              "months10to12": 2
            },
            "creditCardUser": true,
            "heavyCreditCardUsage": "Likely",
            "numberLinesOfCredit": 2,
            "paymentMethodCounts": {
              "other": 4
            }
          },
          "gambling": {
            "casinoGaming": "Likely"
          },
          "gamingAndVideos": {
            "ownAPlaystation": "Somewhat likely",
            "ownAWii": "Likely"
          },
          "healthAndMedical": {
            "noMajorMedicalInsurance": "Very likely"
          },
          "insurance": {
            "homeOwnersInsuranceLoanMonth": "September",
            "homeOwnersInsurancePurchaseMonth": "September",
            "obtainLifeInsuranceMethod": {
              "somewhatLikely": [
                "Fraternal or other membership group",
                "Direct from an insurance company via website"
              ],
              "likely": [
                "Veterans group"
              ]
            },
            "obtainMedicalInsuranceMethod": {
              "somewhatLikely": [
                "Single company agent"
              ],
              "veryLikely": [
                "Internet"
              ]
            }
          },
          "interests": {
            "artsAndEntertainment": [
              "Board games/Puzzles",
              "Crafts"
            ],
            "audioVisual": [
              "HDTV/Satellite dish",
              "Computers"
            ],
            "doItYourself": [
              "Sewing/Knitting/Needlework"
            ],
            "family": [
              "Children's interests"
            ],
            "foodAndBeverage": [
              "Gourmet cooking",
              "Vegetarian foods"
            ],
            "generalInterests": [
              "Aviation",
              "Home furnishings/Decorating"
            ],
            "interestGroups": [
              "Cooking/Food",
              "Electronics/Computers",
              "Home improvement",
              "Sports"
            ],
            "pets": [
              "Cat owner",
              "Dog owner"
            ],
            "selfImprovement": [
              "Dieting/Weight loss",
              "Self improvement"
            ],
            "spectatorSports": [
              "Auto/Motorcycle racing",
              "Football",
              "Tennis"
            ],
            "sportsAndOutdoors": [
              "Gardening"
            ],
            "travel": [
              "Family vacations",
              "International",
              "RV"
            ]
          },
          "investmentsAndAssets": {
            "affordabilityUS": "Cushioned comfort",
            "economicStabilityIndicator": 3,
            "estimatedIncomeMin": 75000,
            "estimatedIncomeMax": 99999,
            "haveAnyPrivatelyHeldSharesOfCompaniesOrPartnerships": "Somewhat likely",
            "retirementAssets": 0,
            "stocksAndBondsInvestor": "Somewhat likely",
            "totalLiquidInvestibleAssets": 4964
          },
          "marketingSuppression": {
            "deceasedBankruptTLJ": true
          },
          "mediaConsumption": {
            "mailOrderResponder": true,
            "mediaChannelUsage": {
              "likely": [
                "Cell phone"
              ],
              "veryLikely": [
                "Internet",
                "Newspaper"
              ]
            }
          },
          "mobilePhonesAndCarriers": {
            "cricketLeapJumpCustomer": "Very likely",
            "useSmartPhone": "Likely"
          },
          "mortgagesAndLoans": {
            "homeEquityAvailable": 164992,
            "homeLendableEquityAvailable": 66392,
            "homeLoanAmountTotal": 328008,
            "homeLoans": [
              {
                "amount": 328008,
                "date": "200909",
                "lenderType": "Proxy",
                "transactionType": "Resale loan",
                "type": "Conventional"
              }
            ],
            "homeLoanToValue": 66,
            "homePurchaseAmount": 410010
          },
          "personicxFinancial": {
            "lifestageCluster": "17"
          },
          "personicxInsurance": {
            "lifestageCluster": "17"
          },
          "personicxLifestage": {
            "lifestageCluster": "17",
            "lifestageGroup": "12B"
          },
          "productPurchases": {
            "apparel": [
              "Infants and toddlers"
            ],
            "booksAndMagazines": [
              "Books",
              "Magazines"
            ],
            "childrensProducts": [
              "Baby care",
              "Learning and activity toys"
            ],
            "electronics": [
              "Computing/Home office general"
            ],
            "hobbies": [
              "Camping/Hiking",
              "Crafts/Hobbies",
              "Gardening",
              "Sports and leisure"
            ],
            "homeAndGarden": [
              "Home and garden"
            ],
            "purchaseGrouping": [
              "Appliances/Home improvement/Outdoor",
              "Sports and leisure"
            ]
          },
          "shoppingAndPurchaseChannel": {
            "mailOrderBuyer": true,
            "onlinePurchaseIndicator": true,
            "purchaseApparelChannel": {
              "veryLikely": [
                "Mass merchant"
              ]
            },
            "purchaseChannel": {
              "somewhatLikely": [
                "Internet"
              ]
            },
            "purchasedViaInternet": {
              "somewhatLikely": [
                "Travel services"
              ]
            }
          },
          "socialMedia": {
            "heavyLinkedInUser": "Somewhat likely"
          },
          "spending": {
            "retailActivityDate": "20130400",
            "retailPurchaseCategories": [
              "Standard retail",
              "Standard specialty/Home improvement"
            ],
            "retailPurchaseMostFrequent": "Standard retail"
          },
          "technology": {
            "cellularUser": "Somewhat likely",
            "internationalLongDistance": "Likely",
            "internetUser": "Very likely",
            "ownAnInternetConnectedTV": "Somewhat likely",
            "pcInternetServiceUser": true,
            "pcOwner": true,
            "technographicSegment": "Gadget Grabbers",
            "top20LongDistance": "Very likely"
          },
          "travelAndEntertainment": {
            "airlineAffinity": {
              "somewhatLikely": [
                "Airtran Airways",
                "Frontier Airlines",
                "Jetblue Airlines",
                "Southwest Airlines"
              ],
              "likely": [
                "Alaska Airlines",
                "United Airlines"
              ],
              "veryLikely": [
                "US Airways"
              ]
            },
            "airlineFrequentFlyerMember": {
              "somewhatLikely": [
                "Delta Sky Miles",
                "American Advantage"
              ]
            },
            "businessTravel": {
              "carRentalBrand": {
                "somewhatLikely": [
                  "Dollar",
                  "Thrifty"
                ],
                "likely": [
                  "Other brand"
                ]
              },
              "hotelRoomNights": 9
            },
            "hotelAffinity": {
              "somewhatLikely": [
                "Hilton"
              ],
              "likely": [
                "IHG",
                "Marriott"
              ]
            },
            "personalTravel": {
              "carRentalBrand": {
                "somewhatLikely": [
                  "Avis"
                ]
              },
              "hotelRoomNights": 7
            }
          },
          "vehicleIMT": {
            "inMarket": {
              "somewhatLikely": [
                "European",
                "Luxury"
              ]
            }
          },
          "vehicleOwnership": {
            "brandAffinity": {
              "ownOrLeaseHonda": "Somewhat likely"
            }
          }
        }
      }
    ]
  }
}
*/