// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist_name, dateCreated, owner) {
    const nft = {
        name: name,
        artist_name: artist_name,
        dateCreated: dateCreated,
        owner: owner
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log('NFT no:' + (i + 1));
        console.log('Name:' + nfts[i].name);
        console.log('Artist:' + nfts[i].artist_name);
        console.log('Date Created:' + nfts[i].dateCreated);
        console.log('Owner name:' + nfts[i].owner);
        console.log('********************************');
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total Supply: ${nfts.length}`);
}

// Call your functions below this line
mintNFT("CryptoKk", "JD", "2023", "Ali");
mintNFT("Digital", "JS", "2022", "Bo0");
mintNFT("VV", "MJ", "2022", "Charl");

listNFTs();
getTotalSupply();
