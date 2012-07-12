class HomeController < ApplicationController
  def index
    @quotes = Array.new
    @quotes.push  Quote.new({"quote" => "A true artist is not one who is inspired, but one who inspires others."})
    @quotes.push  Quote.new({"quote" => "You tell me, and I forget. You teach me, and I remember. You involve me, and I learn."})
    @quotes.push  Quote.new({"quote" => "A great thought begins by seeing something differently, with a shift of the mind's eye."})

    @products = Array.new
    @products.push Product.new({"type" => "eBook", "price" => "12.99"})
    @products.push Product.new({"type" => "CD-AUDIO", "price" => "30.13"})
    @products.push Product.new({"type" => "HARDCOVER", "price" => "24.32"})

    @book = Book.new({
      "title" => "Gold",
      "description" => "The spectacular new novel by the bestselling and critically acclaimed author of the reader and bookseller favourite, Little Bee. In the tradition of his beloved previous novel, Little Bee, Chris Cleave again gives us an elegant, funny, passionate story about friendship, marriage, parenthood, tragedy, and redemption. This time, the setting is the upcoming London Olympics. Gold is the story of two women, Zoe and Kate, world-class cyclists who have been friends and rivals since their first day of elite training years ago. They have loved, fought, betrayed, forgiven, lost, consoled, triumphed, and grown up together. Now, on the eve of London 2012, their last Olympics, the two must compete for the one remaining spot on their team. In doing so, the women will be tested to their physical, mental and emotional limits. They will confront each other and their own mortality, and be asked to decide: What will you sacrifice for the people you love?",
      "image_url" => "img/cover.jpg",
      "author" => "Chris Cleave",
      "isbn" => "9780385677165",
      "format" => "ebook",
      "pages" => "368",
      "publication_date" => "06/05/2012",
      "quotes" => @quotes,
      "products" => @products
    })
    render :action => 'index'
  end
end
